import Toast from 'react-native-root-toast';

const showMessage = ( message ) => {
  Toast.show(message, {
    position: Toast.positions.BOTTOM,
    duration: 2000,
    animation: true,    
  });
}

export default showMessage;