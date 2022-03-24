import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import './App.css'
import Rating from '@mui/material/Rating';
import { useState } from 'react';

let items = 0;

const MultiActionAreaCard = (props) => {

    const[render,setRender] = useState(true);

    const Increment = ()=>{

        console.log(props.nam);
        setRender(!render)
        items += 1
        console.log(items)
    
    }

    const Decrement = ()=>{

        console.log(props.nam);
        setRender(!render)
        items -= 1
        console.log(items)
       }


    return (
     
        <Card sx={{ minWidth: 200, margin: '50px',display:'flex',flexDirection: 'column',justifyContent:' space-between '}}>
            
            <CardActionArea>
                
                <div style={{ backgroundColor: "ButtonHighlight", height: '140px', fontSize: '26px', color: 'GrayText', alignItems: 'center', display: 'flex', justifyContent: 'center'}}>
                    450 x 300
                   {
                      props.sale ? <p id="sale"> Sale</p> : <></>  //conditional rendering
                    }
                </div>

                <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',paddingTop:'0',paddingBottom:'0' }}>

                    <Typography variant="h6" component="div">
                        <h4>{props.items}</h4>
                    </Typography>

                    {
                        props.popular ?  <Rating name="read-only" value='5' readOnly /> : <></>
                    }

                    <Typography variant="body2">
                        {props.sale ? <a className='scratch'>{props.dprice}</a> :<></>}&nbsp;<a>{props.price}</a>
                    </Typography>

                </CardContent>

            </CardActionArea>

            <CardActions style={{ justifyContent: 'center' , position:'relative',bottom:'1px'}}>
                {
                    render? <Button size="small" variant="contained" className='btn' style={{ backgroundColor: 'white'}} onClick={Increment} >Add to cart</Button> 
                    : <Button size="small" variant="contained" className='btn' style={{ backgroundColor: 'white'}} onClick={Decrement} >Remove</Button>
                }

                

            </CardActions>

        </Card>
    );
}

export default MultiActionAreaCard;