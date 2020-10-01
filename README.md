# Active Audio Output Changer

Active Audio Output Changer is a simple web-app to change the active audio output of the computer running the server.

## Deployment

1. `git clone https://github.com/denizariyan/active-audio-output-changer`
1. `cd active-audio-output-changer`
1. delete the `.git` folder (`rm -rf .git`)
1. `npm install` to get&update the dependencies
1. `npm start` to run the server on the port 3000
1. Using your browser or on any other device on the local network go to `localhost:3000`
1. Select the audio interface that you want to set as active output and hit `Submit`

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


## External dependencies
All code in the [External](https://github.com/denizariyan/active-audio-output-changer/tree/main/external) folder is licensed to its rightful owner with their appropriate licenses which you can find in the [External](https://github.com/denizariyan/active-audio-output-changer/tree/main/external) folder. The changes to the 3rd party code is not documented but minor, you can check the [changed file](https://github.com/denizariyan/active-audio-output-changer/blob/main/external/source/EndPointController/EndPointController.cpp) or diff against the [original repo](https://github.com/davuxcom/audio-endpoint-controller).


## License
Any code that is not in the [External](https://github.com/denizariyan/active-audio-output-changer/tree/main/external) folder is licensed under 
[MIT](https://choosealicense.com/licenses/mit/). Check the appropriate license files for the 3rd party code.
