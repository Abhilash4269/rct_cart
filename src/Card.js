import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import './App.css'
import Rating from '@mui/material/Rating';


const MultiActionAreaCard = (props) => {


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
            <Button size="small" variant="contained" className='btn' style={{ backgroundColor: 'white'}} onClick={(e)=>props.click(e)} >Add to cart</Button> 

                

            </CardActions>

        </Card>
    );
}

export default MultiActionAreaCard;