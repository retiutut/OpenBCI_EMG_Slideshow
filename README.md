# EMG Slideshow

This app allows a user to control a slideshow of pictures and movies from a given file directory using muscles only (e.g. open and closing hands). Signal acquisition and processing are handled by the OpenBCI GUI. Normalized EMG data is then streamed via OSC to a simple neural network in Max. A facilitator prepares the user and has override control using a browser based interface via MIRA.

![EMG_Slideshow_Screenshot_Mac](images/emg_slideshow_alpha-screenshot.png)

### Prerequisites

- OpenBCI Cyton or Ganglion
- [OpenBCI GUI](openbci.com/downloads)
- Windows or Mac computer
- Dedicated WiFi router (for wireless iPad/tablet control)
- iPad or any device with a web browser

Optional:
- Secondary display
- HDMI or other video cable to connect to secondary display

### Installing

Install the OpenBCI GUI and connect with hardware, then stream the data to this app using Open Sound Control (OSC) via the Networking Widget.

## Built With

* [Max/MSP](https://cycling74.com/) - Visual Programming Language


## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/retiutut/emg_slideshow/tags). 

## Authors

##### Created by Richard Waltman, June 2019

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## THINGS I INSTALLED:
* ml.star (Max package manager)
