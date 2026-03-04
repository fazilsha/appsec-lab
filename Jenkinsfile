pipeline {
    agent any

    tools {
        sonarQubeScanner 'SonarScanner'
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
                    sh 'sonar-scanner -Dsonar.projectKey=appsec-lab -Dsonar.sources=.'
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