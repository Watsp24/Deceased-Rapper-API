const express = require('express')
const app = express()
const PORT = 8000


const rappers = {

    'biggie': {
    'ageDeceased': 24 ,
    'birthName': 'Christoper George Latore Wallace',
    'birthLocation': 'Brooklyn, New York' ,
    'yearPassed': 'March 9, 1997' ,
    'bestKnownFor' : 'Ready-to-Die',
    'deathCircumstance' : 'California Drive By',
    // 'image': ''
},
    'big l': {
    'ageDeceased': 24 ,
    'birthName': 'Lamont Coleman',
    'birthLocation': 'Harlem, New York' ,
    'yearPassed': 'February 15,1999' ,
    'bestKnownFor' : 'Ebonics',
    'deathCircumstance' : 'Shot 9 times in Harlem',
    // 'image': ''
},
    'tupac': {
    'ageDeceased': 25 ,
    'birthName': 'Tupac Amaruu Shakur',
    'birthLocation': 'Harlem, New York' ,
    'dayPassed': 'September 13,1997' ,
    'bestKnownFor' : 'Hit Em Up!',
    'deathCircumstance' : 'Las Vegas Drive By',
    // 'image': ''

},
    'big pun': {
    'ageDeceased': 28 ,
    'birthName': 'Christopher Rios',
    'birthLocation': 'Twinz' ,
    'dayPassed': 'February 7,2000' ,
    'bestKnownFor' : 'Ready-to-Die',
    'deathCircumstance' : 'heart',
    // 'image': ''

},
    'ol dirty bastard': {
    'ageDeceased': 35 ,
    'birthName': 'Russell Tyrone Jones',
    'birthLocation': 'Fortgreene, New York' ,
    'dayPassed': 'November 13,2004' ,
    'bestKnownFor' : 'Shimmy Shimmy Ya',
    'deathCircumstance' : 'intoxication combined effects of cocaine and painkiller',
    // 'image': ''

},
    'jam master jay': {
    'ageDeceased': 37 ,
    'birthName': 'Jason William Mizell',
    'birthLocation': 'Brooklyn, New York' ,
    'dayPassed': 'October 30,2002' ,
    'bestKnownFor' : 'Dj for Run DMC',
    'deathCircumstance' : 'gun down in studio',
    // 'image': ''

},
    'dmx': {
    'ageDeceased': 50 ,
    'birthName': 'Earl Simmons',
    'birthLocation': 'Bronx, New York' ,
    'dayPassed': 'April  9, 2021' ,
    'bestKnownFor' : 'Its Dark And Hell is Hot',
    'deathCircumstance' : 'cocaine induced heart attack',
    // 'image': ''

},
    'nipsey hussle': {
    'ageDeceased': 33 ,
    'birthName': 'Ermias Asghedom',
    'birthLocation': 'Los Angeles, California' ,
    'dayPassed': 'March 31,2019' ,
    'bestKnownFor' : 'The Marathon',
    'deathCircumstance' : 'shot outside Marathon Clothing store',
    // 'image': ''

},
    'mo3': {
    'ageDeceased': 28 ,  
    'birthName': 'Melvin Noble',  
    'birthLocation': 'Dallas, Texas' ,  
    'dayPassed': 'November 11,2020' ,  
    'bestKnownFor' : 'Hold Ya Tongue',  
    'deathCircumstance' : 'shot in broad daylight on I-35', 
    // 'image': ''

},
    'young dolph': {
    'ageDeceased': 36 ,
    'birthName': 'Adolph Thornton, Jr.',
    'birthLocation': 'Chicago, Illinois' ,
    'dayPassed': 'November 17,2021' ,
    'bestKnownFor' : 'Preach',
    'deathCircumstance' : 'suffered multiple gunshots wounds',
    // 'image': ''

},
    'unknown': {
    'ageDeceased': 0 ,  
    'birthName': 'unknown',  
    'birthLocation': 'unknown' ,  
    'dayPassed': 'unknown' ,  
    'bestKnownFor' : 'unknown',  
    'deathCircumstance' : 'unkown',  
    // 'image': ''

}
}



app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response)=>{
    const rapperName = request.params.name.toLowerCase()
    if(rappers[rapperName]){
        response.json(rappers[rapperName])
        console.log(rappers[rapperName].birthName)
    }else{
        response.json(rappers['unknown'])
    }
    
})

app.listen(PORT , ()=>{
    console.log(`The server is now running on port ${PORT}! Tune In, You Betta Go Catch It`)
})