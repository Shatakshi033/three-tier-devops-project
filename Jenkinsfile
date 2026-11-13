
pipeline {
    agent any

    stages {
        stage('Build Docker Images') {
            steps {
                bat 'docker compose build'
            }
        }
    }
}
