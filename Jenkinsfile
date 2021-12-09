pipeline{
    agent any

    parameters{
        string(name: "SPEC", defaultValue: "cypress/integration/**/**")
        choice(name: "BROWsER", choices: ["chrome","edge","firefox"])
    }
    stages{
        stage("Building"){
            steps{
                echo "Building the application"
            }
        }
        stage("Testing"){
            steps{
                bat "npm install"
                bat "npm run allure:clear"
                bat "npx cypress run --browser ${BROWSER} --spec ${SPEC} --env allure=true"
                bat "npm run posttest"
            }
        }
        stage("Deploying"){
            steps{
                echo "Deploying"
            }
        }
        stage('reports') {
            steps {
                script {
                    allure([
                    includeProperties: false,
                    jdk: '',
                    properties: [],
                    reportBuildPolicy: 'ALWAYS',
                    results: [[path: 'target/allure-results']]
                            ])
                        }
                    }
            }
        stage('Send mail') {
            steps {
                mail(body: 'Test '+${SCRIPT, template="groovy-html.template"}+'', subject: 'Test '+{$env.JOB_BASE_NAME}, to: '0932907271binh@gmail.com')
            }
        }
        
    
    }
}
