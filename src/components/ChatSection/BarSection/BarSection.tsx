import styles from './BarSection.module.css';
import { TextField, Select, MenuItem } from '@mui/material';

function BarSection() {
  return (
    <div className={`flex flex-col mx-2 ${styles.BarBody}`}>
        <h1 className="text-4xl my-10 mx-auto font-bold">NutriTec</h1>
        <div className='flex flex-col mx-6 gap-8'>
            <TextField 
                                label="Enter your weight here"
                                variant="outlined"
                                placeholder="Enter your message here">

            </TextField>
            <TextField 
                                label="Enter your height here"
                                variant="outlined"
                                placeholder="Enter your message here">

            </TextField>
            <TextField 
                                label="Enter your age here"
                                variant="outlined"
                                placeholder="Enter your message here">

            </TextField>
            <TextField 
                                label="Enter your gender"
                                variant="outlined"
                                placeholder="Enter your message here">

            </TextField>
        </div>

    </div>
  );
}

export default BarSection;