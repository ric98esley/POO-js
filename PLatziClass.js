function videoPLay(id) {
    const urlSecret = "https://ricardo.secreto.com";
    console.log("se está reproduciendo desde la url " + urlSecret);
}

function videoStop(id) {
    const urlSecret = "https://ricardo.secreto.com";
    console.log("pausamos la url " + urlSecret);
}

class PlatziClass {
    constructor({
        name,
        videoID,
    })
    {
        this.name = name;
        this.videoID = videoID;
    }

    reproducir(){
        videoPLay(this.videoID);
    }

    pausar() {
        videoStop(this.videoID);
    }
}