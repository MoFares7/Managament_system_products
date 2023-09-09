import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

import TButton from "../components/TButton";
import PageComponent from "../components/PageComponent";
import { useStateContext } from "../contexts/ContextProvider";
import SurveyListItem from './../components/SurveysList';

export default function SurveysPage() {

    const { surveys } = useStateContext();
    console.log("surveys in ContextProvider: ", surveys);
 
    const [loading, setLoading] = useState(false);

    const onDeleteClick = (id) => {

    }

    return (
        <PageComponent
            title="Surveys"
            buttons={
                <TButton color="green" to="/surveys/create">
                    <PlusCircleIcon className="h-6 w-6 mr-2" />
                    Create new
                </TButton>
            }
        >
            {loading && <div className="text-center text-lg">Loading...</div>}
            {!loading && (
                <div>
                    {surveys.length === 0 && (
                        <div className="py-8 text-center text-gray-700">
                            You don't have surveys created
                        </div>
                    )}
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
                        {surveys.map((survey) => (
                            <SurveyListItem
                                survey={survey}
                                key={survey.id}
                                onDeleteClick={onDeleteClick}
                            />
                        ))}
                    </div>
                </div>
            )}
        </PageComponent>
    );
}