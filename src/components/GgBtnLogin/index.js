import react from 'react'
import {View,Text,TouchableOpacity} from 'react-native'
import GoogleLogo from '../../assets/google-icon.svg';

import styles from './style.js';

const GgBtnLogin = ({labelButton},) => {

return(
    <TouchableOpacity style={styles.button} activeOpacity={0.8}>
        <GoogleLogo/>
        <Text style={styles.label}>{labelButton}</Text>
    </TouchableOpacity>
)
}

export default GgBtnLogin