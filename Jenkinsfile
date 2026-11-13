
pipeline {
    agent any

    environment {
        DOCKERHUB_USER = 'shatakshixcloud'
    }

    stages {
        stage('Build Docker Images') {
            steps {
                bat 'docker compose build'
            }
        }

        stage('Push to Docker Hub') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-creds',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]) {
                    bat '''
                        echo %DOCKER_PASS% | docker login -u %DOCKER_USER% --password-stdin

                        docker tag three-tier-ci-cd-backend:latest %DOCKERHUB_USER%/three-tier-devops-backend:%BUILD_NUMBER%
                        docker tag three-tier-ci-cd-backend:latest %DOCKERHUB_USER%/three-tier-devops-backend:latest

                        docker tag three-tier-ci-cd-frontend:latest %DOCKERHUB_USER%/three-tier-devops-frontend:%BUILD_NUMBER%
                        docker tag three-tier-ci-cd-frontend:latest %DOCKERHUB_USER%/three-tier-devops-frontend:latest

                        docker push %DOCKERHUB_USER%/three-tier-devops-backend:%BUILD_NUMBER%
                        docker push %DOCKERHUB_USER%/three-tier-devops-backend:latest

                        docker push %DOCKERHUB_USER%/three-tier-devops-frontend:%BUILD_NUMBER%
                        docker push %DOCKERHUB_USER%/three-tier-devops-frontend:latest
                    '''
                }
            }
        }
    }
}
