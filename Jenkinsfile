pipeline{
    agent any

    parameters{
        string(name: "SPEC", defaultValue: "cypress/intergration/**/**")
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
                bat "npx cypress run --browser ${BROWSER}"
            }
        }
        stage("Deploying"){
            steps{
                echo "END"
            }
        }


    }
}