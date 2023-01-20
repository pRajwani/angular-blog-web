pipeline {
    agent any

    stages {
        stage('NPM Install') {
          steps {
              sh 'npm install'
          }
        }
        stage('Build') {
          steps {
              sh 'ng build' 
          }
        }
        stage('Deploy') {
          steps {
            echo "Deploying..."
          }
        }
    }
}
