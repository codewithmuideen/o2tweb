const DevSOCard = () => {
  return (
    <div className="flex justify-between flex-wrap gap-y-5">
      <div className="sm:w-[30%] w-full bg-white1 py-7 px-8 border-t-2 border-green-700 flex flex-col gap-y-5">
        <h1 className="text-xl font-semibold">Cloud</h1>

        <ul className="list-disc pl-5">
          <li className="marker font-medium pl-3">Cloud strategy</li>
          <li className="marker font-medium pl-3">Cloud adoption</li>
          <li className="marker font-medium pl-3">Cloud operations</li>
          <li className="marker font-medium pl-3">Cloud Security</li>
          <li className="marker font-medium pl-3">Cloud accelerators</li>
        </ul>
      </div>

      <div className="sm:w-[30%] w-full bg-white1 py-7 px-8 border-t-2 border-purple-600 flex flex-col gap-y-5">
        <h1 className="text-xl font-semibold">CI/CD</h1>

        <ul className="list-disc pl-5">
          <li className="marker font-medium pl-3">
            Control and faster time-to-market
          </li>
          <li className="marker font-medium pl-3">Measurable progress</li>
          <li className="marker font-medium pl-3">
            Reduce the risk of defects
          </li>
          <li className="marker font-medium pl-3">
            Easy maintenance and updates
          </li>
          <li className="marker font-medium pl-3">Fast feedback</li>
          <li className="marker font-medium pl-3">Cost-effectiveness</li>
        </ul>
      </div>

      <div className="sm:w-[30%] w-full bg-white1 py-7 px-8 border-t-2 border-blue-700 flex flex-col gap-y-5">
        <h1 className="text-xl font-semibold">
          Infrastructure Automation & Orchestration
        </h1>

        <ul className="list-disc pl-5">
          <li className="marker font-medium pl-3">
            Infrastructure as code (laC)
          </li>
          <li className="marker font-medium pl-3">
            Faster resources provisioning and configuration
          </li>
          <li className="marker font-medium pl-3">Automating routine tasks</li>
          <li className="marker font-medium pl-3">
            Infrastructure and environment consistency
          </li>
          <li className="marker font-medium pl-3">GitOps</li>
          <li className="marker font-medium pl-3">
            Reduce IT overhead and management costs
          </li>
        </ul>
      </div>

      <div className="sm:w-[30%] w-full bg-white1 py-7 px-8 border-t-2 border-purple-700 flex flex-col gap-y-5">
        <h1 className="text-xl font-semibold">Security & Audit</h1>

        <ul className="list-disc pl-5">
          <li className="marker font-medium pl-3">
            Static application security testing
          </li>
          <li className="marker font-medium pl-3">
            Dynamic application security testing
          </li>
          <li className="marker font-medium pl-3">
            Interactive application security testing
          </li>
          <li className="marker font-medium pl-3">
            Software composition analysis
          </li>
          <li className="marker font-medium pl-3">Static code analysis</li>
          <li className="marker font-medium pl-3">Vulnerability scanning</li>
        </ul>
      </div>

      <div className="sm:w-[30%] w-full bg-white1 py-7 px-8 border-t-2 border-green-700 flex flex-col gap-y-5">
        <h1 className="text-xl font-semibold">Monitoring & Logging</h1>

        <ul className="list-disc pl-5">
          <li className="marker font-medium pl-3">Infrastructure monitoring</li>
          <li className="marker font-medium pl-3">
            Design logging and monitoring systems
          </li>
          <li className="marker font-medium pl-3">
            Adopt organization-wide logging and monitoring policies
          </li>
          <li className="marker font-medium pl-3">
            Full visibility into infrastructure components and applications
          </li>
          <li className="marker font-medium pl-3">
            Monitoring, analysis, forecast, alerting, and incident management
          </li>
        </ul>
      </div>

      <div className="sm:w-[30%] w-full bg-white1 py-7 px-8 border-t-2 border-sky-500 flex flex-col gap-y-5">
        <h1 className="text-xl font-semibold">
          Virtualization & Containerization
        </h1>

        <ul className="list-disc pl-5">
          <li className="marker font-medium pl-3">Reduce workload</li>
          <li className="marker font-medium pl-3">
            Improve hardware utilization
          </li>
          <li className="marker font-medium pl-3">
            Portability and flexibility
          </li>
          <li className="marker font-medium pl-3">
            Improved security and isolation
          </li>
          <li className="marker font-medium pl-3">
            Ensure resource efficiency
          </li>
          <li className="marker font-medium pl-3">
            Deploy applications faster and more securely
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DevSOCard;
