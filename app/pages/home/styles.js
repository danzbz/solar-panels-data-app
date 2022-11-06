import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#FFFCB0',
        paddingVertical: '1em',
        textAlign: 'center',
    },
    textAcesso: {
        fontFamily: 'Inter',
        fontWeight: 400,
        fontSize: 32,
        lineHeight: 39,
        textShadowColor: 'rgba(0, 0, 0, 0.25)',
        textShadowOffset: { width: 0, height: 4 },
        textShadowRadius: 4,
    },
    dropdownCondominio: {
        paddingHorizontal: 50,
        paddingVertical: 20,
        fontFamily: 'Inter',
        fontWeight: 400,
        fontSize: 32,
    }
})
export default styles;