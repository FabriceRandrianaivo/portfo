import React from "react";
import { SkeletonColor } from "../components/ui/skeletonColor";

const MaintenancePage: React.FC = () => {
  return (
    <div className="maintenance-container">
      <div className="animate-bounces">
        <table className="table-layout">
          <tbody>
            <tr>
              <td className="cell">
                <SkeletonColor />
              </td>
              <td rowSpan={1} className="cell text-center">
                <h1 className="heading">Oh non ! 🛠️</h1>
                <p className="message">
                  Nous effectuons une petite mise à jour pour améliorer votre expérience.
                </p>
                <p className="thank-you">
                  Merci pour votre patience ! Nous reviendrons très bientôt.
                </p>
                <h1>😊😊😊</h1>
              </td>
              <td className="cell">
                <SkeletonColor />
              </td>
            </tr>
            {/* <tr>
              <td className="cell">
                <SkeletonColor />
              </td>
              <td></td>
              <td className="cell">
                <SkeletonColor />
              </td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MaintenancePage;
