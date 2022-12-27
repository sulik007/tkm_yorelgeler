 const data = [
    {    
        name: 'Türkmenistanyň Prezidentiniň  "Türkmen Döwletlilik Ýörelgesi" atly kitabynyň arap dilindäki neşiriniň tanyşdyrylyş dabarasy geçirildi',
        image:'https://medeniyet.gov.tm/img/news/xl/turkmenin-dowletlilik-yorelgesi-kitabynyn-ermeni-dilindaki-nesirinin-tanysdyrylys-dabarasy-XfMZJ2xl7g.jpg'
    },
    {
        
        name:'Türkmenistanyň Prezidentiniň  "Türkmen Döwletlilik Ýörelgesi" atly kitabynyň rus dilindäki neşiriniň tanyşdyrylyş dabarasy geçirildi',
        image:'data:image/jpeg;base64,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' 
    },

    
    {    
        name: 'Türkmenistanyň Prezidentiniň  "Türkmen Döwletlilik Ýörelgesi" atly kitabynyň türk dilindäki neşiriniň tanyşdyrylyş dabarasy geçirildi',
        image:'data:image/jpeg;base64,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 '
    },
    {
        
        name:' Milli Liderimiziň «Türkmeniň döwletlilik ýörelgesi» atly kitaby ýapon dilinde neşir edildi',
        image:'https://medeniyet.gov.tm/img/news/xl/milli-liderimizin-turkmenin-dowletlilik-yorelgesi-kitaby-korey-dilinde-nesir-edildi-FiIcOPuFew.jpg'
    },
    
    {    
        name: ' Milli Liderimiziň “Türkmeniň döwletlilik ýörelgesi” kitaby özbek dilinde neşir edildi',
        image:'https://milligosun.gov.tm/storage/post/image/milli-liderimizin-turkmenin-dowletlilik-yorelgesi-kitaby-ozbek-dilinde-nesir-edildi-E4QAtaOHr4.jpg'
    }

]

export default data;