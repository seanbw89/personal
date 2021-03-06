import React, { Component } from 'react'
import Particles from 'react-particles-js'



export default class Landing extends Component {
  login(){
    let {REACT_APP_DOMAIN,REACT_APP_CLIENT_ID} = process.env
    let url = `${window.location.origin}/auth/callback`
    window.location = `https://${REACT_APP_DOMAIN}/authorize?client_id=${REACT_APP_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${url}&response_type=code`
  }
  render(){
    return(
      <div>
      <Particles
        params={{
          particles:{
            number:{
              value: 35,
              density: {
                enable:true,
                value_area:800
              }
            },
            color:{
              value: '#bada55'
            },
            shape:{
              type:'square',
              stroke:{
                width:0,
                color:'#bada55'
              },
              polygon:{
                nb_sides: 12,
              }
            },
            opacity:{
              value:0.1,
              random:false,
              anim:{
                enable:false,
                speed:1,
                opacity_min:0.1,
                sync:false
              }
            },
            size:{
              value:1,
              random:true,
              anim:{
                enable:false,
                speed:40,
                size_min:0.1,
                sync:false
              }
            },
            line_linked:{
              enable:true,
              distance:150,
              color:'#bada55',
              opacity:0.4,
              width:1
            },
            move:{
              enable:true,
              speed:6,
              direction:'none',
              random:false,
              straight:false,
              out_mode: 'out',
              bounce:false,
              attract:{
                enable:false,
                rotateX:600,
                rotateY:1200
              }

            }
          },
          interactivity:{
            detect_on:'canvas',
            events:{
              onhover:{
                enable:true,
                mode:'repulse'
              },
              onclick:{
                enable:true,
                mode:'push'
              },
              resize:true
            },
            modes:{
              grab:{
                distance:400,
                line_linked:{
                  opacity:1
                }
              },
              bubble:{
                distance:400,
                size:40,
                duration:2,
                opacity:8,
                speed:3
              },
              repulse:{
                distance:200,
                duration:0.4
              },
              push:{
                particles_nb:4
              },
              remove:{
                particles_nb:2
              }
            }

          },
          retina_detected:false
          
        }}
        style={{background:'rgb(127,127,127)' ,zIndex:'-1', position:'absolute',display:'block',top:'0',left:'0'}}
      
      >
      </Particles>
      
      <div style={{zIndex:'1', width:'100%', height:'100vh', display:'flex',justifyContent:'space-evenly' ,alignItems:'center',flexDirection:'column'}}>
        <span style={{fontSize:'2rem',transform:'rotate(10deg)',letterSpacing:'9px',marginLeft:'90px',marginBottom:'10px',cursor:'pointer'}} onClick={()=>this.login()}>Personal Computer Chunks</span>
        <span style={{fontSize:'3rem',transform:'rotate(-10deg)',cursor:'pointer'}} onClick={()=>this.login()}>Login</span>
      </div>
      </div>
    )
  }
  
}
