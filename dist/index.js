import React, { useRef, useState } from 'react';
import { DevSettings, PanResponder, Pressable, StyleSheet, Text, View } from 'react-native';
const TouchReload = ({ children, DEFAULT_VISIBLE = false, ACTIVE_TOUCHES = 3 }) => {
    const [visible, setVisible] = useState(DEFAULT_VISIBLE);
    const panResponder = useRef(PanResponder.create({
        onStartShouldSetPanResponderCapture: (_, { numberActiveTouches }) => numberActiveTouches >= ACTIVE_TOUCHES,
        onPanResponderGrant: () => setVisible((p) => !p),
    })).current;
    return (React.createElement(View, { style: styles.container, ...panResponder.panHandlers },
        children,
        visible && (React.createElement(Pressable, { onPress: () => DevSettings.reload(), style: styles.button },
            React.createElement(Text, { style: styles.text }, 'RELOAD')))));
};
export const withTouchReload = (Component, DEFAULT_VISIBLE, ACTIVE_TOUCHES) => {
    return function Reloadable(props) {
        if (__DEV__) {
            return (React.createElement(TouchReload, { DEFAULT_VISIBLE: DEFAULT_VISIBLE, ACTIVE_TOUCHES: ACTIVE_TOUCHES },
                React.createElement(Component, { ...props })));
        }
        return React.createElement(Component, { ...props });
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
