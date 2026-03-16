function showLocation(){
    
    myMap = document.getElementById("map");
    
    if(navigator.geolocation){
        myMap.innerHTML = "getting your location....."
        

        navigator.geolocation.getCurrentPosition(function(position){
            let lat = position.coords.latitude;
            let lng = position.coords.longitude;


            myMap.innerHTML = `

            <iframe src="https://www.google.com/maps?q=${lat},${lng}&output=embed" 
            width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

            `
        },
        function(){
            myMap.innerHTML = "could not get your locvation access denied"
        }
    )
    }else{
        myMap.innerHTML = "Geolocation is not supported by this browser."
    }
}