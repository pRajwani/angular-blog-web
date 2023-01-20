pipeline {
    agent any

    stages {
        stage('NPM Install') {
              sh 'npm install'
        }
        stage('Build') {
            steps {
                sh 'ng build' 
            }
        }
        stage('Deploy') {
          echo "Deploying..."
        }
    }
}
