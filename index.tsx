import React, { PropsWithChildren, useRef, useState } from 'react';
import { DevSettings, PanResponder, Pressable, StyleSheet, Text, View } from 'react-native';

type Props = PropsWithChildren<{ DEFAULT_VISIBLE?: boolean; ACTIVE_TOUCHES?: number }>;
const TouchReload: React.FC<Props> = ({ children, DEFAULT_VISIBLE = false, ACTIVE_TOUCHES = 3 }) => {
  const [visible, setVisible] = useState(DEFAULT_VISIBLE);
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponderCapture: (_, { numberActiveTouches }) => numberActiveTouches >= ACTIVE_TOUCHES,
      onPanResponderGrant: () => setVisible((p) => !p),
    }),
  ).current;

  return (
    <View style={styles.container} {...panResponder.panHandlers}>
      {children}
      {visible && (
        <Pressable onPress={() => DevSettings.reload()} style={styles.button}>
          <Text style={styles.text}>{'RELOAD'}</Text>
        </Pressable>
      )}
    </View>
  );
};

export const withTouchReload = (
  Component: (props: object) => JSX.Element,
  DEFAULT_VISIBLE?: boolean,
  ACTIVE_TOUCHES?: number,
) => {
  return function Reloadable(props: object) {
    if (__DEV__) {
      return (
        <TouchReload DEFAULT_VISIBLE={DEFAULT_VISIBLE} ACTIVE_TOUCHES={ACTIVE_TOUCHES}>
          <Component {...props} />
        </TouchReload>
      );
    }
    return <Component {...props} />;
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  button: {
    backgroundColor: 'rgba(255,113,17,0.6)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderRadius: 25,
    position: 'absolute',
    bottom: '50%',
    right: 15,
  },
  text: {
    fontSize: 10,
    color: 'white',
  },
});

export default TouchReload;
