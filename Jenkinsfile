pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/Ramkishore08/JSON-Formatter-Validator.git'
            }
        }

        stage('Test') {
            steps {
                echo 'Testing JSON Formatter application'
            }
        }

        stage('Build') {
            steps {
                echo 'Building Docker image'
            }
        }
    }
}
