import React,{useEffect,useState} from 'react'
import { Box,Button,Stack,TextField,Typography } from '@mui/material'
// import { fetchData } from '../utils/fetchData'
// import { exerciseOptions , fetchData } from '../utils/fetchData'
import { exerciseOptions } from '../utils/fetchData';
import { fetchData } from '../utils/fetchData';
// import { createRoot } from 'react-dom/client';
import HorizontalScrollbar from './HorizontalScrollbar';


const SearchExercises = ({setExercises,bodypart,setBodyPart}) => {
  const [search,setSearch]=useState('')
const [ bodyParts,setBodyParts] = useState([])
useEffect(()=>{
const fetchExercisesData = async ()=>{
  const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPart/back',exerciseOptions);

  setBodyParts(['all',...bodyPartsData]);
}

fetchExercisesData();
},[])
  
  const handleSearch = async ()=>{
    if(search){
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions);

      const SearchExercises = exercisesData.filter(
        (exercise) => exercise.name.toLowerCase().includes(search)
      ||  exercise.target.toLowerCase().includes(search)
         ||exercise.equipment.toLowerCase().includes(search)
         || exercise.bodypart.toLowerCase().includes(search)
      );
      setSearch('');
      setExercises(setExercises);
    }
  }
  return (
  <Stack alignItems='center' mt='37px' justifyContent='center' p='20px' >
<Typography fontWeight={700} sx={{
  fontSize:{lg: '44px',xs : '30px'}
}}
mb='50px' textAlign='center'
>
Notable Workout Plans
</Typography>

<Box position='relative' mb='72px'>
<TextField height='76px' 
sx={{
  input: {fontWeight:'700',
border:'none',borderRadius:'4px'
},
width: {lg: '800px',xs:'350px'},
backgroundColor:'fff',
borderRadius:'40px'

}}
value={search}
onChange={(e)=>setSearch(e.target.value.toLowerCase())}
placeholder='Search WorkOuts'
type='Text'/>
<Button className='search-btn'
sx={{
  bgcolor:'#FF2625',
  color:'#fff',
  textTransform:'none',
  width:{lg:'175px',xs: '80px'},
  fontSize:{ lg:"20px",xs:"14px"}
,
height:'56px',
position:'absolute',
right:'0'
}}
onClick={handleSearch}
>
Search
</Button>
</Box>
<Box sx={{position:'relative',width: '100%', p:'20px'}}>
<HorizontalScrollbar data={bodyParts}
bodypart={bodypart} setBodyPart=
{setBodyPart}/>
</Box>
  </Stack>
  )
}

export default SearchExercises