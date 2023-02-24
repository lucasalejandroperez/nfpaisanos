import { Avatar } from '../../../../components/Avatar/Avatar.elements';
import { ImageDetailContainer } from './ImageDetail.elements';

interface Props {
	imageSource: string;
	title: string;
	subTitle: string;
	alt?: string;
}

export const ImageDetail = ({
	imageSource,
	title,
	subTitle,
	alt = 'Avatar image',
}: Props): JSX.Element => {
	return (
		<ImageDetailContainer>
			<div>
				<Avatar src={imageSource} alt={alt} />
			</div>
			<div>
				<p>{title}</p>
				<h2>{subTitle}</h2>
			</div>
		</ImageDetailContainer>
	);
};
