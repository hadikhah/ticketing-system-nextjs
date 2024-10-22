import React from 'react'

export const Card = ({ title, status, statusColor, content, supporters, closed = false }) => {
  return (
    <div className={`card bg-base-100 shadow-xl ${closed ? 'opacity-70' : ''}`}>
      <div className="card-body">
        <div className="flex justify-between items-center">
          <h3 className="card-title text-sm">{title}</h3>
          <div className={`badge ${statusColor}`}>{status}</div>
        </div>
        <p className="text-sm">{content}</p>
        <div className="flex items-center mt-4 space-x-2">
          <div className="avatar-group -space-x-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="avatar">
                <div className="w-8">
                  <img src={`https://picsum.photos/32/32?random=${i}`} />
                </div>
              </div>
            ))}
          </div>
          <span className="text-sm text-base-content/70">+{supporters} پاسخ دهنده پشتیبانی</span>
        </div>
      </div>
    </div>
  )
}

