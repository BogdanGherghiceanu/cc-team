import React from 'react';
import {
  Title,
  Container,
  SimpleGrid,
  useMantineTheme,
  createStyles,
} from '@mantine/core';
import Car from "./Car"


const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: theme.spacing.xl * 4,
    paddingBottom: theme.spacing.xl * 4,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    marginBottom: theme.spacing.md,
    textAlign: 'center',

    [theme.fn.smallerThan('sm')]: {
      fontSize: 28,
      textAlign: 'left',
    },
  },

  subtitle: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 500,
    fontSize: 10,
    marginBottom: theme.spacing.md,
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 0.1)',

    [theme.fn.smallerThan('sm')]: {
      fontSize: 5,
      textAlign: 'left',
    },
  },

  description: {
    textAlign: 'center',

    [theme.fn.smallerThan('sm')]: {
      textAlign: 'left',
    },
  },
}));

let content: Array<object> = []

async function getCarsInfo() {
  // fetch catre API care ia datele din baza de date
  // var mongoClient = require("mongodb").MongoClient;
  // mongoClient.connect("mongodb://accountcc:zDedgr2I7BiAohpFIU2JDMQnAY13BMWWIUFjuFLdXZaou4wN8L9ZLU6WcFTvbRWHiznYp2xqSjDKWkhpkyZC9A%3D%3D@accountcc.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@accountcc@", function (err: any, client: { close: () => void; }) {
    
  // client.close();
  // });

  content.push(<Car nrOfSeats='4 passengers' speed='100 km/h in 4 seconds' gearbox='Automatic gearbox' type='Electric' imgSrc='https://images.unsplash.com/photo-1453491945771-a1e904948959?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' carName='Tesla Model S' price='$168.00'/>)
  content.push(<Car nrOfSeats='4 passengers' speed='100 km/h in 4 seconds' gearbox='Automatic gearbox' type='Electric' imgSrc='https://images.unsplash.com/photo-1453491945771-a1e904948959?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' carName='Tesla Model S' price='$180.00'/>)
  content.push(<Car nrOfSeats='4 passengers' speed='100 km/h in 4 seconds' gearbox='Automatic gearbox' type='Electric' imgSrc='https://images.unsplash.com/photo-1453491945771-a1e904948959?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' carName='Tesla Model S' price='$130.00'/>)
  content.push(<Car nrOfSeats='4 passengers' speed='100 km/h in 4 seconds' gearbox='Automatic gearbox' type='Electric' imgSrc='https://images.unsplash.com/photo-1453491945771-a1e904948959?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' carName='Tesla Model S' price='$170.00'/>)
}

export default function FeaturesGrid() {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  getCarsInfo()

  return (
    <Container className={classes.wrapper}>
      <Title className={classes.title}>Rent a car, any car</Title>
      <Title className={classes.subtitle}>Just pick a damn car, we need 💸 cause Azure is expensive af</Title>
      <SimpleGrid
        mt={60}
        cols={3}
        spacing={theme.spacing.xl * 2}
        breakpoints={[
          { maxWidth: 980, cols: 2, spacing: 'xl' },
          { maxWidth: 755, cols: 1, spacing: 'xl' },
        ]}
      >
        {content}
      </SimpleGrid>
    </Container>
  );
}