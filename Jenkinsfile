pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t appsec-lab:1.0 .'
            }
        }

        stage('Run Container') {
            steps {
                sh 'docker run -d -p 4000:3030 --name appsec-test appsec-lab:1.0'
            }
        }
    }
}
