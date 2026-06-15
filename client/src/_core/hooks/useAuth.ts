import { useState, useEffect } from 'react'; export function useAuth() { return { isAuthenticated: true, loading: false, user: null }; }
