async function getApiData(){
    try{
       var response =await fetch("https://restcountries.com/v3.1/name/bharat")
        var[data]=await response.json()
            var [data] = JSON.parse(request.responseText)
            document.getElementById("name").innerHTML = data.name.official
            document.getElementById("Capital").innerHTML = data.capital[0]
            document.getElementById("flags").src = data.flags.svg
            document.getElementById("Population").innerHTML = data.population
            document.getElementById("Area").innerHTML = data.area
            document.getElementById("Independent").innerHTML = data.independent
            document.getElementById("Unmember").innerHTML = data.unmember
            document.getElementById("Landlocked").innerHTML = data.landlock
            document.getElementById("Region").innerHTML = data.region
            document.getElementById("subRegion").innerHTML = data.subregion
            document.getElementById("startofweek").innerHTML = data.startofweek
            document.getElementById("Borders").innerHTML = data.borders
            document.getElementById("timezone").innerHTML = data.timezones
            document.getElementById("maps").href = data.maps.googleMaps
        }
        catch(error){
            alert("Invalid country Name")
        }
    }
    getApiData()
     async function searchCountry() {
        try{
        var name=document.getElementById("search").value
        var response = await fetch("https://restcountries.com/v3.1/name/"+name)
        var[data]=await response.json()
            document.getElementById("name").innerHTML = data.name.official
            document.getElementById("Capital").innerHTML = data.capital[0]
            document.getElementById("flags").src = data.flags.svg
            document.getElementById("Population").innerHTML = data.population
            document.getElementById("Area").innerHTML = data.area
            document.getElementById("Independent").innerHTML = data.independent
            document.getElementById("Unmember").innerHTML = data.unmember
            document.getElementById("Landlocked").innerHTML = data.landlock
            document.getElementById("Region").innerHTML = data.region
            document.getElementById("subRegion").innerHTML = data.subregion
            document.getElementById("startofweek").innerHTML = data.startofweek
            document.getElementById("Borders").innerHTML = data.borders
            document.getElementById("timezone").innerHTML = data.timezones
            document.getElementById("maps").href = data.maps.googleMaps
        }
        catch(error){
            alert("Invalid country Name")
        }
    }
    
// function getApiData() {
//     var request = new XMLHttpRequest()
//     request.open("get", "https://restcountries.com/v3.1/name/bharat")
//     request.send()

//     request.addEventListener("load", () => {
//         var [data] = JSON.parse(request.responseText)
//         document.getElementById("name").innerHTML = data.name.official
//         document.getElementById("Capital").innerHTML = data.capital[0]
//         document.getElementById("flags").src = data.flags.svg
//         document.getElementById("Population").innerHTML = data.population
//         document.getElementById("Area").innerHTML = data.area
//         document.getElementById("Independent").innerHTML = data.independent
//         document.getElementById("Unmember").innerHTML = data.unmember
//         document.getElementById("Landlocked").innerHTML = data.landlock
//         document.getElementById("Region").innerHTML = data.region
//         document.getElementById("subRegion").innerHTML = data.subregion
//         document.getElementById("startofweek").innerHTML = data.startofweek
//         document.getElementById("Borders").innerHTML = data.borders
//         document.getElementById("timezone").innerHTML = data.timezones
//         document.getElementById("maps").href = data.maps.googleMaps
//     })
// }
// getApiData()
// function searchCountry() {
//     var search=document.getElementById("search").value
//     var request = new XMLHttpRequest()
//     request.open("get", "https://restcountries.com/v3.1/name/"+search)
//     request.send()

//     request.addEventListener("load", () => {
//         var [data] = JSON.parse(request.responseText)
//         document.getElementById("name").innerHTML = data.name.official
//         document.getElementById("Capital").innerHTML = data.capital[0]
//         document.getElementById("flags").src = data.flags.svg
//         document.getElementById("Population").innerHTML = data.population
//         document.getElementById("Area").innerHTML = data.area
//         document.getElementById("Independent").innerHTML = data.independent
//         document.getElementById("Unmember").innerHTML = data.unmember
//         document.getElementById("Landlocked").innerHTML = data.landlock
//         document.getElementById("Region").innerHTML = data.region
//         document.getElementById("subRegion").innerHTML = data.subregion
//         document.getElementById("startofweek").innerHTML = data.startofweek
//         document.getElementById("Borders").innerHTML = data.borders
//         document.getElementById("timezone").innerHTML = data.timezones
//         document.getElementById("maps").href = data.maps.googleMaps
//     })
// }
