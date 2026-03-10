pipeline {
    agent any

    options {
        skipDefaultCheckout(true)
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv('SonarQube') {
                    withCredentials([string(credentialsId: 'sonar', variable: 'SONAR_TOKEN')]) {
                        sh '''
                        docker run --rm \
                        --platform linux/amd64 \
                        -e SONAR_HOST_URL=$SONAR_HOST_URL \
                        -e SONAR_TOKEN=$SONAR_TOKEN \
                        -v $WORKSPACE:/usr/src \
                        -v $WORKSPACE/.scannerwork:/usr/src/.scannerwork \
                        -w /usr/src \
                        sonarsource/sonar-scanner-cli \
                        sonar-scanner \
			-Dsonar.projectKey=appsec-lab \
                	-Dsonar.projectName="AppSec Lab" \
                	-Dsonar.sources=. \
                	-Dsonar.inclusions=**/*.js \
                	-Dsonar.exclusions=node_modules/** \
                	-Dsonar.scm.disabled=true
                        '''
                    }
                }
            }
        }

        stage('SAST - Semgrep') {
            steps {
                sh 'semgrep --config=auto . || true'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t appsec-lab:${BUILD_NUMBER} .'
            }
        }

        stage('Container Scan') {
            steps {
                sh 'trivy image appsec-lab:${BUILD_NUMBER}'
            }
        }

        stage('Run Container') {
            steps {
                sh 'docker rm -f appsec-test || true'
                sh 'docker run -d -p 4000:3030 --name appsec-test appsec-lab:${BUILD_NUMBER}'
            }
        }
    }
}
