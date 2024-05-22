import {Grid} from '@mui/material';
import ChatSection from './components/ChatSection/ChatSection'
import BarSection from './components/ChatSection/BarSection/BarSection';
import './App.css'

function App() {

  return (
    <div style = {{backgroundColor:"#f2d8bd"}} className='w-full h-f'>
      <Grid container justifyContent={'center'} xs={12} spacing={8}>
        <Grid item xs={3} >
          <BarSection/>
        </Grid>
        <Grid item xs={9} >
          <Grid container xs={12}>
            <Grid item xs={2}>
            </Grid>
            <Grid item xs={8}>
              <ChatSection/>
            </Grid>
            <Grid item xs={2} >
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default App
