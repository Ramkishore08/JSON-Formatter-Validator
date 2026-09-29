pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/Ramkishore08/JSON-Formatter-Validator.git'
            }
        }

        stage('Test') {
            steps {
                echo 'Testing JSON Formatter application'
            }
        }

        stage('Docker Build') {
            steps {
                bat 'docker build -t json-formatter-validator .'
            }
        }

        stage('Docker Push') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-credentials',
                    usernameVariable: 'DOCKER_USERNAME',
                    passwordVariable: 'DOCKER_PASSWORD'
                )]) {
                    bat 'docker login -u %DOCKER_USERNAME% -p %DOCKER_PASSWORD%'
                    bat 'docker tag json-formatter-validator:latest %DOCKER_USERNAME%/json-formatter-validator:latest'
                    bat 'docker push %DOCKER_USERNAME%/json-formatter-validator:latest'
                }
            }
        }
    }
}
