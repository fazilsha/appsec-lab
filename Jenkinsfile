pipeline {
    agent any

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
                -e SONAR_HOST_URL=$SONAR_HOST_URL \
                -e SONAR_TOKEN=$SONAR_TOKEN \
                -v $(pwd):/usr/src \
                sonarsource/sonar-scanner-cli \
                sonar-scanner \
                -Dsonar.projectKey=appsec-lab \
                -Dsonar.sources=/usr/src
                '''
            }
        }
    }
}

        stage('SAST - Semgrep') {
            steps {
                sh 'semgrep --config=auto --error .'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t appsec-lab:1.0 .'
            }
        }

        stage('Run Container') {
            steps {
                sh 'docker rm -f appsec-test || true'
                sh 'docker run -d -p 4000:3030 --name appsec-test appsec-lab:1.0'
            }
        }
    }
}