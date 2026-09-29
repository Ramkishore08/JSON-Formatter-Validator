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
    }
}
