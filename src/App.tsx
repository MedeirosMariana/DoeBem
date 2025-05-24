import React, { type PropsWithChildren, Suspense } from "react"

import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

import { Provider } from 'react-redux'
import { PersistGate } from "redux-persist/integration/react"
import { Redux } from 'storage/redux'

export const App = ({ children }: PropsWithChildren) => (
  <Suspense>
    <Provider store={Redux.getStore()}>
      <PersistGate loading={null} persistor={Redux.getPersistor()}>
        <View style={styles.container}>
          <Text style={{ color: 'white' }}>Open up App.tsx to start working on your app!</Text>
          <StatusBar style="auto" />
        </View>

        <View>
          {children}
        </View>
      </PersistGate>
    </Provider>
  </Suspense>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
