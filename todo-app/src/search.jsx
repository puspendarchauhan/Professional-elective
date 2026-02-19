import { useState } from "react";

export default function Search() {
    const [searchTerm, setSearchTerm] = useState("");
    const names = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Heidi"];
    const filteredNames = names.filter(name => name.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return(
        <section style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            padding: '2.5rem',
            borderRadius: '20px',
            minHeight: '400px',
            color: 'white',
            boxShadow: '0 15px 35px rgba(0,0,0,0.3)',
            maxWidth: '600px',
            margin: '2rem auto'
        }}>
            <h1 style={{
                fontSize: '2.5rem',
                marginBottom: '2rem',
                textAlign: 'center',
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                letterSpacing: '1px'
            }}>🔍 Search Names</h1>
            
            <div style={{
                marginBottom: '2rem'
            }}>
                <input 
                    type="text"
                    placeholder="Search names..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{
                        width: '100%',
                        padding: '15px 20px',
                        fontSize: '1.1rem',
                        borderRadius: '25px',
                        border: 'none',
                        outline: 'none',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.2)',
                        transition: 'all 0.3s'
                    }}
                    onFocus={(e) => {
                        e.target.style.boxShadow = '0 8px 15px rgba(0,0,0,0.3)';
                        e.target.style.transform = 'scale(1.02)';
                    }}
                    onBlur={(e) => {
                        e.target.style.boxShadow = '0 4px 6px rgba(0,0,0,0.2)';
                        e.target.style.transform = 'scale(1)';
                    }}
                />
            </div>

            {searchTerm && (
                <p style={{
                    textAlign: 'center',
                    fontSize: '0.95rem',
                    marginBottom: '1.5rem',
                    opacity: 0.9,
                    fontStyle: 'italic'
                }}>
                    Found {filteredNames.length} result{filteredNames.length !== 1 ? 's' : ''}
                </p>
            )}

            <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0
            }}>
                {filteredNames.length > 0 ? (
                    filteredNames.map((name, index) => (
                        <li
                            key={index}
                            style={{
                                background: 'rgba(255,255,255,0.2)',
                                padding: '15px 20px',
                                marginBottom: '10px',
                                borderRadius: '10px',
                                backdropFilter: 'blur(10px)',
                                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                                transition: 'all 0.3s',
                                fontSize: '1.1rem',
                                cursor: 'pointer',
                                border: '1px solid rgba(255,255,255,0.2)'
                            }}
                            onMouseOver={(e) => {
                                e.target.style.background = 'rgba(255,255,255,0.3)';
                                e.target.style.transform = 'translateX(8px)';
                                e.target.style.boxShadow = '0 8px 15px rgba(0,0,0,0.2)';
                            }}
                            onMouseOut={(e) => {
                                e.target.style.background = 'rgba(255,255,255,0.2)';
                                e.target.style.transform = 'translateX(0)';
                                e.target.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
                            }}
                        >
                            ✨ {name}
                        </li>
                    ))
                ) : searchTerm ? (
                    <div style={{
                        textAlign: 'center',
                        padding: '2rem',
                        fontSize: '1.1rem',
                        opacity: 0.8
                    }}>
                        No names found matching "{searchTerm}"
                    </div>
                ) : (
                    <div style={{
                        textAlign: 'center',
                        padding: '2rem',
                        fontSize: '1rem',
                        opacity: 0.8
                    }}>
                        Type to search...
                    </div>
                )}
            </ul>
        </section>
    )
}