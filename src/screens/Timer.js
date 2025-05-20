import React, { useEffect, useRef, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Animated,
} from 'react-native';

const Timer = () => {
    const [duration, setDuration] = useState(30 * 60); // seconds
    const [timeLeft, setTimeLeft] = useState(30 * 60);
    const [running, setRunning] = useState(false);

    const progress = useRef(new Animated.Value(0)).current;
    const intervalRef = useRef(null);

    const radius = 140;
    const circumference = 2 * Math.PI * radius;

    useEffect(() => {
        if (running && timeLeft > 0) {
            intervalRef.current = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
        } else {
            clearInterval(intervalRef.current);
        }

        return () => clearInterval(intervalRef.current);
    }, [running]);

    useEffect(() => {
        const percent = (duration - timeLeft) / duration;
        Animated.timing(progress, {
            toValue: percent,
            duration: 500,
            useNativeDriver: false,
        }).start();

        if (timeLeft === 0) {
            setRunning(false);
        }
    }, [timeLeft]);

    const formatTime = (s) => {
        const m = Math.floor(s / 60);
        const sec = s % 60;
        return `${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
    };

    const handlePlus = () => {
        if (!running) {
            setDuration((prev) => prev + 60);
            setTimeLeft((prev) => prev + 60);
        }
    };

    const handleMinus = () => {
        if (!running && duration > 60) {
            setDuration((prev) => prev - 60);
            setTimeLeft((prev) => prev - 60);
        }
    };

    const handleStartPause = () => {
        if (timeLeft === 0) {
            setTimeLeft(duration);
        }
        setRunning((prev) => !prev);
    };

    const handleEnd = () => {
        setRunning(false);
        setTimeLeft(duration);
    };

    const strokeDashoffset = progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, -circumference],
    });

    return (
        <View style={styles.timerContainer}>
            <View style={styles.circleWrapper}>
                <View style={styles.circleGlow} />
                <View style={styles.svgPlaceholder}>
                    <Animated.View
                        style={[
                            styles.progress,
                            {
                                transform: [{ rotateZ: '270deg' }],
                                strokeDasharray: `${circumference} ${circumference}`,
                                strokeDashoffset,
                            },
                        ]}
                    />
                    <Text style={styles.timerText}>{formatTime(timeLeft)}</Text>
                </View>
            </View>

            {!running && (
                <View style={styles.adjustContainer}>
                    <TouchableOpacity style={styles.adjustButton} onPress={handlePlus}>
                        <Text style={styles.adjustText}>+</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.adjustButton} onPress={handleMinus}>
                        <Text style={styles.adjustText}>-</Text>
                    </TouchableOpacity>
                </View>
            )}

            {running ? (
                <TouchableOpacity style={styles.centerButton} onPress={handleStartPause}>
                    <Text style={styles.pauseIcon}>⏸</Text>
                </TouchableOpacity>
            ) : null}

            <TouchableOpacity style={styles.bottomButton} onPress={running ? handleEnd : handleStartPause}>
                <Text style={styles.bottomButtonText}>{running ? 'End' : 'Start'}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    timerContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 40,
    },
    circleWrapper: {
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30,
    },
    circleGlow: {
        position: 'absolute',
        width: 300,
        height: 300,
        borderRadius: 150,
        backgroundColor: '#ff4d6d33',
        shadowColor: '#ff4d6d',
        shadowRadius: 20,
        shadowOpacity: 1,
        shadowOffset: { width: 0, height: 0 },
    },
    svgPlaceholder: {
        width: 280,
        height: 280,
        borderRadius: 140,
        borderWidth: 5,
        borderColor: '#ff4d6d',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0d0d0d',
    },
    progress: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: 280,
        height: 280,
        borderRadius: 140,
        borderWidth: 5,
        borderColor: '#ff4d6d',
    },
    timerText: {
        fontSize: 60,
        color: '#fff',
        fontWeight: 'bold',
    },
    adjustContainer: {
        flexDirection: 'row',
        gap: 20,
        marginBottom: 20,
    },
    adjustButton: {
        width: 60,
        height: 60,
        backgroundColor: '#333',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    adjustText: {
        fontSize: 30,
        color: '#fff',
    },
    centerButton: {
        backgroundColor: '#333',
        width: 60,
        height: 60,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    pauseIcon: {
        fontSize: 24,
        color: '#fff',
    },
    bottomButton: {
        backgroundColor: '#ff4d6d',
        borderRadius: 12,
        paddingVertical: 14,
        paddingHorizontal: 60,
        shadowColor: '#ff4d6d',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
    },
    bottomButtonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default Timer;
