import React, { useState, useEffect, useRef } from "react";
import { db, auth } from "./firebase";
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc, query, orderBy } from "firebase/firestore";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

const ReleaseCMS = () => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [date, setDate] = useState("");
  const [year, setYear] = useState("");
  const [type, setType] = useState("");
  const [body, setBody] = useState("");
  const [pressReleases, setPressReleases] = useState([]);
  const [editingRelease, setEditingRelease] = useState(null);
  const textareaRef = useRef(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (user) {
      fetchPressReleases();
    }
  }, [user]);

  const fetchPressReleases = async () => {
    const q = query(collection(db, "pressReleases"), orderBy("date", "desc"));
    const querySnapshot = await getDocs(q);
    const releases = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setPressReleases(releases);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newRelease = {
      name: title,
      url,
      date,
      year: parseInt(year),
      type,
      body,
    };

    try {
      if (editingRelease) {
        const releaseRef = doc(db, "pressReleases", editingRelease.id);
        await updateDoc(releaseRef, newRelease);
        setEditingRelease(null);
      } else {
        await addDoc(collection(db, "pressReleases"), newRelease);
      }
      setTitle("");
      setUrl("");
      setDate("");
      setYear("");
      setType("");
      setBody("");
      fetchPressReleases();
    } catch (error) {
      alert("Error adding/updating document: " + error.message);
    }
  };

  const handleEdit = (release) => {
    setEditingRelease(release);
    setTitle(release.name);
    setUrl(release.url);
    setDate(release.date);
    setYear(release.year.toString());
    setType(release.type);
    setBody(release.body);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this press release?")) {
      try {
        await deleteDoc(doc(db, "pressReleases", id));
        fetchPressReleases();
      } catch (error) {
        alert("Error deleting document: " + error.message);
      }
    }
  };

  const formatDateForInput = (dateStr) => {
    const dateObj = new Date(dateStr);
    const year = dateObj.getFullYear();
    const month = (dateObj.getMonth() + 1).toString().padStart(2, "0");
    const day = dateObj.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  // Function to insert HTML tags into the textarea
  const insertTag = (tag, isList = false) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const currentValue = textarea.value;
    const selectedText = currentValue.substring(start, end);

    let newValue;
    let cursorPosition;

    if (isList) {
      const listItemContent = selectedText.split(/\r\n|\r|\n/).map(line => `<li>${line}</li>`).join('\n');
      const contentToInsert = selectedText ? listItemContent : '<li>List item</li>';
      const openTag = `<${tag}>\n`;
      const closeTag = `\n</${tag}>`;

      newValue = currentValue.substring(0, start) + openTag + contentToInsert + closeTag + currentValue.substring(end);
      cursorPosition = start + openTag.length + (selectedText ? listItemContent.length : '<li>'.length);

    } else if (tag === 'h1' || tag === 'h2' || tag === 'p') {
      const openTag = `<${tag}>`;
      const closeTag = `</${tag}>`;
      const textToWrap = selectedText || `Your ${tag} content`;
      
      newValue = currentValue.substring(0, start) + openTag + textToWrap + closeTag + currentValue.substring(end);
      cursorPosition = start + openTag.length + (selectedText ? selectedText.length : `Your ${tag} content`.length);

    } else {
      const openTag = `<${tag}>`;
      const closeTag = `</${tag}>`;
      newValue = currentValue.substring(0, start) + openTag + selectedText + closeTag + currentValue.substring(end);
      cursorPosition = start + openTag.length + selectedText.length;
    }

    setBody(newValue);

    requestAnimationFrame(() => {
      textarea.focus();
      textarea.selectionStart = cursorPosition;
      textarea.selectionEnd = cursorPosition;
    });
  };

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Login to CMS</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={handleRegister}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Register (First Time Use)
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Press Release CMS</h1>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Logout
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mb-8 p-6 border rounded-lg bg-gray-50">
          <h2 className="text-2xl font-bold mb-4">{editingRelease ? "Edit Press Release" : "Add New Press Release"}</h2>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="url">PDF URL</label>
            <input
              type="url"
              id="url"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              required
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">Date</label>
              <input
                type="date"
                id="date"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="year">Year</label>
              <input
                type="number"
                id="year"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="type">Type</label>
              <input
                type="text"
                id="type"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={type}
                onChange={(e) => setType(e.target.value)}
                placeholder="e.g., Announcement"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="body">Body (HTML)</label>
            <div className="flex flex-wrap gap-2 mb-2">
              <button type="button" className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300" onClick={() => insertTag('h3')}>H3</button>
              <button type="button" className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300" onClick={() => insertTag('h2')}>H2</button>
              <button type="button" className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300" onClick={() => insertTag('p')}>P</button>
              <button type="button" className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300" onClick={() => insertTag('strong')}>B</button>
              <button type="button" className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300" onClick={() => insertTag('em')}>I</button>
              <button type="button" className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300" onClick={() => insertTag('ul', true)}>UL</button>
              <button type="button" className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300" onClick={() => insertTag('ol', true)}>OL</button>
              <button type="button" className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300" onClick={() => insertTag('blockquote')}>BLOCKQUOTE</button>
            </div>
            <textarea
              id="body"
              ref={textareaRef}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-48 mb-4"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              required
            />
            <div className="bg-gray-100 p-4 rounded-lg text-sm text-gray-700">
              <p className="font-bold mb-2">You can use basic HTML tags for formatting, e.g.:</p>
              <ul className="list-disc list-inside space-y-1">
                <li><code>&lt;h1&gt;Main Heading&lt;/h1&gt;</code></li>
                <li><code>&lt;h2&gt;Section Heading&lt;/h2&gt;</code></li>
                <li><code>&lt;p&gt;Paragraph text&lt;/p&gt;</code></li>
                <li><code>&lt;strong&gt;Bold text&lt;/strong&gt;</code> Or <code>&lt;b&gt;Bold text&lt;/b&gt;</code></li>
                <li><code>&lt;em&gt;Italic text&lt;/em&gt;</code> Or <code>&lt;i&gt;Italic text&lt;/i&gt;</code></li>
                <li><code>&lt;ul&gt;&lt;li&gt;List item&lt;/li&gt;&lt;/ul&gt;</code> for bullet lists</li>
                <li><code>&lt;ol&gt;&lt;li&gt;List item&lt;/li&gt;&lt;/ol&gt;</code> for numbered lists</li>
                <li><code>&lt;blockquote&gt;Quoted text&lt;/blockquote&gt;</code></li>
              </ul>
              <p className="mt-2">Do NOT include <code>&lt;script&gt;</code> tags.</p>
            </div>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              {editingRelease ? "Update Press Release" : "Add Press Release"}
            </button>
            {editingRelease && (
              <button
                type="button"
                onClick={() => {
                  setEditingRelease(null);
                  setTitle("");
                  setUrl("");
                  setDate("");
                  setYear("");
                  setType("");
                  setBody("");
                }}
                className="ml-2 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Cancel Edit
              </button>
            )}
          </div>
        </form>

        <h2 className="text-2xl font-bold mb-4">Existing Press Releases</h2>
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <ul className="divide-y divide-gray-200">
            {pressReleases.map((release) => (
              <li key={release.id} className="px-4 py-5 sm:px-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-indigo-600 truncate">{release.type}</p>
                    <p className="text-lg font-bold text-gray-900">{release.name}</p>
                    <p className="mt-1 text-sm text-gray-500">{formatDate(release.date)} - {release.year}</p>
                  </div>
                  <div className="mt-4 flex-shrink-0 flex md:mt-0 md:ml-4">
                    <button
                      onClick={() => handleEdit(release)}
                      className="ml-3 inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(release.id)}
                      className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    >
                      Delete
                    </button>
                    <a
                      href={release.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                      View PDF
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleString("en-IN", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default ReleaseCMS; 
