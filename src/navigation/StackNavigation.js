import * as React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {Home, Search, MovieDetail} from '../screens'
import {useDispatch, useSelector} from 'react-redux'
import {hide} from '../redux/reducers/spinner'
import {AxiosInstance} from '../customHooks'

const Stack = createNativeStackNavigator()

function App () {
  const dispatch = useDispatch()
  const spinner = useSelector(x => x.spinner)
  React.useEffect(() => {
    if (spinner) {
      dispatch(hide())
    }
  }, [])
  return (
    <NavigationContainer>
      <AxiosInstance>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='MovieDetail' component={MovieDetail} />
          <Stack.Screen name='Search' component={Search} />
        </Stack.Navigator>
      </AxiosInstance>
    </NavigationContainer>
  )
}

export default App
