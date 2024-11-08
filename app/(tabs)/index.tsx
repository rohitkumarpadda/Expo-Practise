import { View, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import Button from '@/components/button';
import ImageViewer from '@/components/ImageViewer';
import CircleButton from '@/components/CircleButton';
import IconButton from '@/components/IconButton';

const PlaceholderImage = require('@/assets/images/background-image.png');

export default function Index() {
	const [selectedImage, setSelectedImage] = useState<string | undefined>(
		undefined
	);
	const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
	const pickImageAsync = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsEditing: true,
			quality: 1,
		});

		if (!result.canceled) {
			setSelectedImage(result.assets[0].uri);
			setShowAppOptions(true);
		} else {
			alert('You did not select any image.');
		}
	};

	const onReset = () => {
		setShowAppOptions(false);
	};

	const onAddSticker = () => {
		alert('Add sticker');
	};

	const onSaveImageAsync = () => {
		alert('Saved Image');
	};

	return (
		<View style={styles.container}>
			<View style={styles.imageContainer}>
				<ImageViewer
					imgSource={PlaceholderImage}
					selectedImage={selectedImage}
				/>
			</View>
			{showAppOptions ? (
				<View style={styles.optionContainer}>
					<View style={styles.optionRow}>
						<IconButton icon='refresh' label='Refresh' onPress={onReset} />
						<CircleButton onPress={onAddSticker} />
						<IconButton
							icon='save-alt'
							label='Save'
							onPress={onSaveImageAsync}
						/>
					</View>
				</View>
			) : (
				<View style={styles.footerContainer}>
					<Button
						theme='primary'
						label='Choose a photo'
						onPress={pickImageAsync}
					/>
					<Button
						label='Use this photo'
						onPress={() => setShowAppOptions(true)}
					/>
				</View>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#25292e',
		alignItems: 'center',
	},
	imageContainer: {
		flex: 1,
	},
	footerContainer: {
		flex: 1 / 3,
		alignItems: 'center',
	},
	optionContainer: {
		position: 'absolute',
		bottom: 80,
	},
	optionRow: {
		alignItems: 'center',
		flexDirection: 'row',
	},
});
