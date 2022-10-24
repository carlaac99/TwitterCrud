const express = require('express');
const bodyParser = require("body-parser");

const router = express.Router();
const knex = require('knex');
const knexConfig = require('../knexfile');
const db = knex (knexConfig);
router.use(bodyParser.urlencoded({ extended: false }));

router.use(express.json());

router.get('/find/:id',async(req,res)=>{
    try{
        const tweets = await db.raw(`
        SELECT * FROM tweets WHERE id= '${req.params.id}';`);
        console.log('database data tweets:',tweets.rows);
        res.json(tweets.rows[0]);

    }catch(err){
        console.log(err);
        res.json(err);
    }
});

//WORKS
router.get('', async(req,res)=>{
    try{
        const tweets = await db.raw(`
        SELECT * FROM tweets;
                                `);
        console.log('database data tweets:',tweets.rows);
        res.json(tweets.rows);

    }catch(err){
        console.log(err);
        res.json(err);

    }

    // db.raw(`SELECT * FROM tweets`).then( tweets =>{
    //     console.log ('DB data tweets:',tweets);
    // }).catch(err => console.log(err))
});

//DOESNT WORK

router.post('/',async(req,res)=>{
    const id = Math.floor(Math.random()*1000);
    const tweetName = req.body.name;
    const tweetDescription = req.body.description;
    console.log('this is the request body:', req.params);
    try{
        await db.raw(`
            INSERT INTO tweets VALUES( '${id}','${tweetName}','${tweetDescription}');
        `)
        res.json({message:'Tweet created Sucessfully!'});

    }catch(err){
        console.log('failed');
        res.json(err);

    }
    res.send('i am here')
});

//WORKS
router.delete('/delete/:id',async(req,res)=>{
    console.log('this is the request body:', req.body);

    try{
        await db.raw(`
        DELETE FROM tweets WHERE id=${req.params.id};

        `)
        res.json({message:'Tweet deleted Sucessfully!'});

    }catch(err){
            res.json(err);
        }
    });
//DOESNT WORK
//works, had to change req.body to req.params
//
router.post(`/update`,async(req,res)=>{
    try{
        await db.raw(`
        UPDATE tweets
        SET description ='${req.body.description}', name ='${req.body.name}'
        WHERE id = ${req.body.id};
        `)
        res.json({message:'Tweet Updated Sucessfully!'});


    }catch(err){
        res.json(err);



    }


});


module.exports=router;