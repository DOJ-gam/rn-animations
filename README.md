# React Native Animations

> Learn animations in React Native

- in order to use animations in React Native we need to use **Animated** component from React Native
- To animate any other component we will need to wrap that component withe the Animated component like:=> **<Animated.View></Animated.View>**
- We can use a functions to dynamically change animations values.
- to start an animation, we need to add the method **start()** at the end of the animation.
- If ther is another animation after the first animation, the start method can take a callback function that is called once the animation is completed, you can chain another animation to it.

# Opacity

- We dynamically set the opacity of an object using animatins in react native.

## Animation.timing() =>

- It will specify the animation of a single value to another value over a set period of time.
- Its function signal is:=> Animation and the configuration object: Animation.timing(animation, {toValue: 0, duration:900, useNativeDriver: true })
