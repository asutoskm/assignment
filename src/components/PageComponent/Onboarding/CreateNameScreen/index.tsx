import React, { useState } from 'react';
import Screen from '@/constants/enums/screen';
import PromotionalTile from './Helper/PromotionalTile';
import RecommendedUsernames from './Helper/RecommendedUsernames';
import CreateNameForm from './Helper/CreateNameForm';
import CreateNameHeader from './Helper/Header';
import { USER_NAMES } from '@/constants/onBoarding/constant';

type Props = {
    onChangeScreen: (screen: Screen) => void;
};

const CreateNameScreen: React.FC<Props> = ({ onChangeScreen }) => {
    const [inputValue, setInputValue] = useState<string>('');
    const [selectedUsername, setSelectedUsername] = useState<string>('');


    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleCreateName = () => {
        console.log("Name created");
        onChangeScreen(Screen.DASHBOARD);
    };

    const handleRecommendedUserNameClicked = (recommendedUserName: string) => {
        console.log("recommendedUserName", recommendedUserName);
        setSelectedUsername(recommendedUserName); 
        setInputValue(recommendedUserName); // Update the input value to the selected username
    };

    return (
        <div className='rounded-2xl flex flex-col justify-center items-center gap-2  px-4 py-4 bg-background-card transition-all'>
            <CreateNameHeader/>
            <CreateNameForm
                inputValue={inputValue}
                onInputChange={handleInputChange}
                onCreateName={handleCreateName}
            />
            <RecommendedUsernames
                usernames={USER_NAMES}
                selectedUsername={selectedUsername}
                onUsernameClick={handleRecommendedUserNameClicked}
            />
            <PromotionalTile />
        </div>
    );
};

export default CreateNameScreen;