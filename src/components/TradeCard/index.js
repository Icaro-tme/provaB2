import {View,Text,Image,Button} from 'react-native';
import styles from './styles.js'
import React, { useState } from 'react';

function TradeCard(props){
    const [isHighlighted, setIsHighlighted] = useState(false);

    const handlePress = () => {
      setIsHighlighted(!isHighlighted);
    };
    
    const getImagePath = (name) => {
        switch (name) {
          case 'Axe':
            return require('../../images/axe.png');
          case 'Sword':
            return require('../../images/sword.png');
          case 'Bow':
            return require('../../images/bow.png');
          default:
            return null;
        }
      }


    const{key,title,att,def,wt}=props.weapon
    return(
        <View style={[styles.card, isHighlighted && styles.highlighted]}>
            <View style={styles.imgContainer}>
                <Image source={getImagePath(title)}                
                    style={styles.image}>
                </Image>
            </View>
            
            <View style={styles.info}>
                <Text>{title}</Text>
                <View style={styles.line} />
                <Text>
                    - Ataque:{att} {'\n'}
                    - Defesa:{def} {'\n'}
                    - Peso:{wt} {'\n'}
                </Text>
                <Button
                style={styles.button}
                onPress={handlePress}
                title="Trade"
                color="#841584"
                />
            </View>
        </View>
        
    )
}

export default TradeCard