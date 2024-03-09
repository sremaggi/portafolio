import { BeatLoader} from 'react-spinners';

export const Loading = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center">
      <BeatLoader color="#12EAE4"  />
    </div>
  );
};
