import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import { BarLoader } from "react-spinners";
import ApplicationCard from "./ApplicationCard";
import { getApplications } from "@/api/apiApplications";
import useFetch from "@/hooks/UseFetch";

const CreatedApplications = () => {
  const { user } = useUser();
  const {
    loading: loadingApplications,
    data: applications,
    fn: fnApplications,
  } = useFetch(getApplications, {
    user_id: user.id,
  });

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        await fnApplications();
      } catch (error) {
        console.error(error);
        // Handle the error here
      }
    };

    fetchApplications();
  }, []);

  if (loadingApplications) {
    return <BarLoader className="mb-4" width={"100%"} color="#36d7b7" />;
  }

  if (!applications) {
    return <p>Error: Unable to fetch applications</p>;
  }

  return (
    <div className="flex flex-col gap-2">
      {applications.map((application) => {
        return (
          <ApplicationCard
            key={application.id}
            application={application}
            isCandidate
          />
        );
      })}
    </div>
  );
};

export default CreatedApplications;