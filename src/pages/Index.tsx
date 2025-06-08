import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200">
      <div className="text-center">
        {/* TODO: replace everything here with the actual app! */}
        <h1 className="text-2xl font-semibold text-slate-800 flex items-center justify-center gap-3">
          <svg
            className="animate-spin h-8 w-8 text-slate-400"
            viewBox="0 0 50 50"
          >
            <circle
              className="opacity-30"
              cx="25"
              cy="25"
              r="20"
              stroke="currentColor"
              strokeWidth="5"
              fill="none"
            />
            <circle
              className="text-slate-600"
              cx="25"
              cy="25"
              r="20"
              stroke="currentColor"
              strokeWidth="5"
              fill="none"
              strokeDasharray="100"
              strokeDashoffset="75"
            />
          </svg>
          Generating your app...
        </h1>
        <p className="mt-4 text-slate-600 max-w-md">
          Watch the chat on the left for updates that might need your attention
          to finish generating
        </p>

        <div className="mt-8 flex flex-col gap-4">
          <Link
            to="/create-project"
            className="inline-flex items-center px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors duration-200"
          >
            View Create Project Demo
          </Link>
          <Link
            to="/edit-project"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            View Edit Project Demo
          </Link>
          <Link
            to="/project-enquiry"
            className="inline-flex items-center px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors duration-200"
          >
            View Project Enquiry Demo
          </Link>
          <Link
            to="/project-type-demo"
            className="inline-flex items-center px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors duration-200"
          >
            View Project Type Selection Demo
          </Link>
          <Link
            to="/revision-message"
            className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200"
          >
            View Revision Message Demo
          </Link>
          <Link
            to="/proposal-message"
            className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200"
          >
            View Proposal Message Demo
          </Link>
          <Link
            to="/ddb-proposal"
            className="inline-flex items-center px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors duration-200"
          >
            View DDB Proposal Demo
          </Link>
          <Link
            to="/delete-project"
            className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200"
          >
            View Delete Project Demo
          </Link>
          <Link
            to="/payment-success"
            className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200"
          >
            View Payment Success Demo
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
