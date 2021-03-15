import React, { useState, useEffect } from 'react';
import LottieView from 'lottie-react-native';
import { StyleSheet, View, Text } from 'react-native';
// import { connect } from 'react-redux';

import { useSelector } from 'react-redux';

const ActivityLoadingModule = (props) => {
    // // console.log("[[[[[[[[[[[[[[[[[[[[[[[props>>>>>>>>>>>>>>>" , props)
    // const { isLoading, isSplash } = props.auth;

    // // console.log("isLoading>>>>>" + isLoading);
    // // console.error("isSplash>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>" + isSplash);

    // //Splash 경우 로딩 제거
    // if (isSplash) return null;

    // if (!isLoading) return null;

    // useEffect(() => {
    //     // console.log('>>>>>> isLoading ', isLoading);
    // }, [isLoading])

    const { isLoading } = useSelector(state => state.loadingReducer);

    useEffect(() => {

        console.log('isLoading >>>>> ', isLoading);
    }, [isLoading])

    return (
        isLoading ?
            (<View style={styles.container}>
                <LottieView source={require("./loading-animation.json")} autoPlay loop />
            </View>)
            : null
    )

}
const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        zIndex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(52, 52, 52, 0.5)',
        elevation: 1, // for android
    }
})

// const mapStateToProps = state => ({ auth: state.authReducer })
// export default connect(mapStateToProps)(ActivityLoadingModule)

export default ActivityLoadingModule;

