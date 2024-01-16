import { Box } from '@gluestack-ui/themed';


const Container = ({children}:any) => {
    return (
      <Box maxWidth={1400} mx={"auto"} width={'$full'} px={20}>
        {children}
      </Box>
    );
  };
  export default Container;