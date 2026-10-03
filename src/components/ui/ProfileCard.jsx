import { useState } from "react";
import { TbMapPin } from "react-icons/tb";
import profile from "../../assets/images/portfolio.png";

export default function ProfileCard() {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="relative">
      <div className="card profile-card bg-bg-secondary/60 backdrop-blur-sm overflow-hidden">
        <div className="profile-photo-frame">
          {imgError ? (
            <div className="profile-photo-fallback">
              <svg
                width="56"
                height="56"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
              >
                <circle cx="12" cy="8" r="4" />
                <path d="M4 21c0-4 4-7 8-7s8 3 8 7" />
              </svg>
            </div>
          ) : (
            <img
              src={profile}
              alt="Gebiyaw profile headshot"
              className="profile-photo"
              onError={() => setImgError(true)}
            />
          )}
          <div className="profile-info">
            <span className="profile-info-icon">
              <TbMapPin size={16} />
            </span>
            <div className="profile-info-text">
              <p className="profile-info-title">Addis Ababa, Ethiopia</p>
              <p className="profile-info-sub">
                BSc Computer Science · Injibara
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Side scroll hint (unchanged) */}
      <div className="hidden lg:flex absolute -right-8 top-1/2 -translate-y-1/2 flex-col items-center gap-3"></div>
    </div>
  );
}
